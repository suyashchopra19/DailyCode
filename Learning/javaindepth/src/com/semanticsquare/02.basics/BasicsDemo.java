class BasicsDemo {
    static void primitives(){
        System.out.println("\n\n Inside Primitives");
        int intHex = 0x0041;
        int intBinary = 0b01000001;
        int intUnderscore = 1_23_456;
        System.out.println("intHex: " + intHex);
        System.out.println("intBinary: " + intBinary);
        System.out.println("intUnderscore: " + intUnderscore);
    }

    static void typeCasting(){
        long y = 42;
        int x = (int)y;
    }

    static void arrays(){
        System.out.println("\n Arrays");
        int[] myArray = new int[] {9,11,2,5,4,4,6};
        System.out.println("myArray.length " + myArray.length );
        System.out.println("myArray[1]:" + myArray[1]);
    }

    public static void main(String[] args){
        // primitives();
        // typeCasting();
        arrays();
    }
}