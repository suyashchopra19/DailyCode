public class Dog {
    public int weightInPounds; // We declare this here since if we declare it in public Dog, it will be
    // avalible only locally

    /** One integer constructor for Dogs. */
    public Dog(int w) {
        weightInPounds = w;
    }

    public void makeNoise() {
        if (weightInPounds < 10) {
            System.out.println("Yip");
        } else if (weightInPounds < 30) {
            System.out.println("Bark");
        } else {
            System.out.println("Woof");
        }
    }

    public static Dog maxDog(Dog d1, Dog d2) {
        if (d1.weightInPounds > d2.weightInPounds)
            return d1;
        return d2;
    }
    // Static variables should be accessed using the name of the class rather than a
    // specific instance,
    // e.g. you should use Dog.maxDog, not Casper.maxDog
}