class Animal():
    species = 'Mammal'

    def __init__(self, health):
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 10
        return self


class Dog(Animal):
    def __init__(self, health):
        Animal.__init__(self, health) #Equivlant to super() in constructor 

    def pet(self):
        self.health += 20  
        return self

class Dragon(Animal):
    def __init__(self,health):
        Animal.__init__(self, health)
    
    def fireBall(self):
        self.health -= 10
        return self
        


sam = Dog(10)
sam.walk().run().pet()
print(sam.health)

draco = Dragon(100)
draco.walk().run().fireBall()
print(draco.health)