class MyClass:
    def set_val(self, val):
        try:
            val = int(val)
        except ValueError:
            return
        self.val = val

    def get_val(self):
        return self.val
    
    def increment(self):
        self.val = self.val + 1
        return self.val
    
a = MyClass()
b = MyClass()

a.set_val(5)
b.set_val(10)
a.val = 1000 # setting the method directly is called breaking the encapsulation.
             # there are ways to force encapsulation

print(a.get_val())
print(b.get_val())