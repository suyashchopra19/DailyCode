import java.awt.*;

public class Main{

    public static void main(String... args){
        Car myCar = new Car(25, "PLATE", Color.WHITE, false);
    
        System.out.println(myCar.licensePlate);
        System.out.println(myCar.paintColor);
    
        myCar.changePaintColor(Color.RED);
        System.out.println(myCar.paintColor.toString());

    }    
}