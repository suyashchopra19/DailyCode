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
    def __init__(self, health, breed):
        Animal.__init__(self, health) #Equivlant to super() in constructor 
        self.breed = breed

    def pet(self):
        self.health += 20  
        return self

class Dragon(Animal):
    def __init__(self,health):
        Animal.__init__(self, health)
    
    def fireBall(self):
        self.health -= 10
        return self
        
class DragoDog(Dog, Dragon):
    def __init__(self, health, breed, powers):
        Dog.__init__(self, health,breed)
        Dragon.__init__(self,health)
        self.powers = powers

dsquare = DragoDog(100, 'Golden', ['bark','jump'])

print(dsquare.powers)
dsquare.run().walk().fireBall().pet()
print(dsquare.health)

sam = Dog(10,'Lab')
sam.walk().run().pet()
print(sam.health)

draco = Dragon(100)
draco.walk().run().fireBall()
print(draco.health)