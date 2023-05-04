from django.test import TestCase
import math
# Create your tests here.


def divide_chunks(l, n):    
    # looping till length l
    for i in range(0, len(l), n):
        yield l[i:i + n]

elemNum = 17
testArr = list(range(1, elemNum+1))
pagesNum = int(math.ceil(elemNum / 20))
reelsArr = list(divide_chunks(testArr,20))

#print(testArr, reelsArr)

for page in range(pagesNum):
    print('page ', (page + 1))
    for item in range(20):
        if item == (elemNum - (page * 20)):
            break
        print(reelsArr[page][item])
