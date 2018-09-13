class InstanceCounter:
    count = 0 #class variable

    def __init__(self, val):
        self.val = val
        InstanceCounter.count +=1  #class attribute

    def set_val(self, val):
        self.val = val

    def get_val(self):
        return self.val
    
    def get_count(self):
        return InstanceCounter.count
    
a = InstanceCounter(5)
b = InstanceCounter(13)
c = InstanceCounter(17)

for obj in (a, b, c):
    print (obj.get_val())
    print (obj.get_count())