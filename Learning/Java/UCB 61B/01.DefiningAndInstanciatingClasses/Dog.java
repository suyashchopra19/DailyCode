public class Dog {
    int weightInPounds; // We declare this here since if we declare it in public Dog, it will be
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
}