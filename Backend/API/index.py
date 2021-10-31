from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
import os
import warnings
warnings.filterwarnings('ignore')
from pandas.core.series import Series
import yfinance as yf
import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
from pandas.plotting import lag_plot
from datetime import datetime
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error

class Tickers(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('query', type=str)
        parser.add_argument('exchange', type=str)
        SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
        f = open(SITE_ROOT + "/IND_stocks.csv")
        name = str(parser.parse_args().query).lower()
        exchange = str(parser.parse_args().exchange).upper()
        arr = []
        for item in f:
            data = item.split(',')
            b = str(data[1]).lower()
            if name in b and data[2] == exchange:
                d = {"symbol": data[0], "name": data[1]}
                arr.append(d)
        if (len(arr) == 0):
            return {'error': ['No Company Found']}, 200    
        else:
            data = arr
        return {'data': data}, 200  # return data and 200 OK code

def GetPrediction(Company):
    df = yf.download(tickers=Company, period='7d', interval='5m')
    if len(df) > 0:
        train_data, test_data = df[0:int(len(df)*0.7)], df[int(len(df)*0.7):]
        training_data = train_data['Close'].values
        test_data = test_data['Close'].values
        history = [x for x in training_data]
        model_predictions = []
        N_test_observations = len(test_data)

        from pmdarima.arima import auto_arima
        model_autoARIMA = auto_arima(training_data, start_p=0, start_q=0,
                            test='adf',       # use adftest to find optimal 'd'
                            max_p=3, max_q=3, # maximum p and q
                            m=1,              # frequency of series
                            d=None,           # let model determine 'd'
                            seasonal=False,   # No Seasonality
                            start_P=0, 
                            D=0, 
                            trace=True,
                            error_action='ignore',  
                            suppress_warnings=True, 
                            stepwise=True)


        for time_point in range(N_test_observations):
            model = ARIMA(history, order = model_autoARIMA.order)
            model_fit = model.fit()
            output = model_fit.forecast()
            yhat = output[0]
            model_predictions.append(yhat)
            true_test_value = test_data[time_point]
            history.append(true_test_value)
        return {"Name": Company ,"data" : model_predictions[len(model_predictions) - 1] }
    else:
        return {"error" : "No data found"}


class Predict(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ticker', type=str)
        ticker = parser.parse_args().ticker
        predictedData = GetPrediction(ticker)
        return predictedData, 200

class Details(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ticker', type=str)
        ticker = parser.parse_args().ticker
        data = yf.Ticker(ticker)
        return {
            "INFO": data.info
        }, 200

app = Flask(__name__)
api = Api(app)


api.add_resource(Tickers, '/get_ticker', endpoint='get_ticker')
api.add_resource(Predict, '/get_data', endpoint='get_data')
api.add_resource(Details, '/fetch_details', endpoint='fetch_details')


if __name__ == '__main__':
    app.run(debug=True)