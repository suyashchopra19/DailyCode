public class DogLauncher {
    public static void main(String[] args) {
        // this is an instance variable
        Dog Casper = new Dog(10); // Creating a new dog
        Casper.makeNoise();

        Dog largeDog = new Dog(80);
        largeDog.makeNoise();

        Dog bigger = Dog.maxDog(Casper, largeDog);
        bigger.makeNoise();
    }
}