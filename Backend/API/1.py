f = open("IND_stocks.csv")
name = "rel"
e = "NSI"
print("NSE STOCKS")
arr = []
for i in f:
    a = i.split(',')
    b = str(a[1]).lower()
    if name in b and a[2] == e:
        d = {"symbol": a[0], "name": a[1]}
        arr.append(d)
print(arr)