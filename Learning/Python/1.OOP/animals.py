class Animal ():
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        
    def run(self):
        self.health -= 5

    def displayAll(self):
        print (self.name, self.health)

    def eatFood(self):
        self.health +=10

class Dog(Animal):
    def pet(self):
        self.health +=10

Casper = Dog("Casper", 10)
Casper.walk().displayAll()