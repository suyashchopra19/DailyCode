class Greetings:
    def callme(self):
        print('Good Morning')

a = Greetings()
a.callme() # here the instance a is passed in the method call me as the first argument on its own
           # because of this, the instance methods are sometimes called as bound methods.
           # self is the object on which the method is called! self is 'a' in this case

