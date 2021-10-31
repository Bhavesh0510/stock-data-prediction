import os
import warnings
warnings.filterwarnings('ignore')

from pandas.core.series import Series

#Data Source
import yfinance as yf

#Data viz
import plotly.graph_objs as go

#Interval required 5 minutes
df = yf.download(tickers='RELIANCE.NS', period='7d', interval='5m')

import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
from pandas.plotting import lag_plot
from datetime import datetime
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error

train_data, test_data = df[0:int(len(df)*0.7)], df[int(len(df)*0.7):]
training_data = train_data['Close'].values
test_data = test_data['Close'].values
history = [x for x in training_data]
model_predictions = []
N_test_observations = len(test_data)

from pmdarima.arima.utils import ndiffs
y = training_data

## Adf Test
p1 = ndiffs(y, test='adf')  # p

# KPSS test
d1 = ndiffs(y, test='kpss')  # d

# PP test:
q1 = ndiffs(y, test='pp')  # q

#print(p1,d1,q1)

for time_point in range(N_test_observations):
    model = ARIMA(history, order = (p1,d1,q1))
    model_fit = model.fit()
    output = model_fit.forecast()
    yhat = output[0]
    model_predictions.append(yhat)
    true_test_value = test_data[time_point]
    history.append(true_test_value)
# MSE_error = mean_squared_error(test_data, model_predictions)
# print('Testing Mean Squared Error is {}'.format(MSE_error))


# test_set_range = df[int(len(df)*0.7):].index
# plt.plot(test_set_range, model_predictions, color='blue', marker='o', linestyle='dashed',label='Predicted Price')
# plt.plot(test_set_range, test_data, color='red', label='Actual Price')
# plt.title('NIFTY Prices Prediction')
# plt.xlabel('Date')
# plt.ylabel('Prices')
# plt.xticks(np.arange(174,248,20), df.Date[174:248:20])
# plt.legend()
# plt.show()

print(model_predictions[len(model_predictions)-1])