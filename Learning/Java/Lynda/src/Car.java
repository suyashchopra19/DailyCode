import java.awt.*;

public class Car {
    int averageMilesPerGallon;
    String licensePlate;
    Color paintColor;
    boolean areTailingWorking;

    // Creating the constructor method; It will return an object : Car
    public Car(int inputAverageMPG, String inputLicensePlate, Color inputPaintColor,
            boolean inputAreTaillightsWorking) {
        this.averageMilesPerGallon = inputAverageMPG;
        this.licensePlate = inputLicensePlate;
        this.paintColor = inputPaintColor;
        this.areTailingWorking = inputAreTaillightsWorking;
    }

    public void changePaintColor(Color newPaintColor) {
        this.paintColor = newPaintColor;
    }
}