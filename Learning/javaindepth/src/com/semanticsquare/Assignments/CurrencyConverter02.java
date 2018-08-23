public class CurrencyConverter02 {

    // int rupee = 63; //
    // int dirham = 3; // UAE
    // int real = 3; // brazilian

    // int chilean_peso = 595;
    // int mexican_peso = 18;

    // int _yen = 107; 
    // int $australian = 2;
    double[] exchangeRates;

    void setExchangeRates(double[] rates){
        exchangeRates = rates;
    }

    void updateExchangeRates(int arrayIndex, double newVal ){
        exchangeRates[arrayIndex] = newVal;
    }

    double getExchangeRates(int arrayIndex) {
        return exchangeRates[arrayIndex];
    }

    double computeTransferAmount(int arrayIndex, double amount) {
        return getExchangeRates(arrayIndex)* amount;
    }

    void printCurrencies() {
        System.out.println("rupee: " + exchangeRates[0]);
        System.out.println("dirham: " + exchangeRates[1]);
        System.out.println("real: " + exchangeRates[2]);
        System.out.println("chilean_peso: " + exchangeRates[3]);
        System.out.println("mexican_peso: " + exchangeRates[4]);
        System.out.println("_yen: " + exchangeRates[5]);
        System.out.println("$australian: " + exchangeRates[exchangeRates.length-1]);
    }

    public static void main(String[] args) {
        CurrencyConverter02 cc = new CurrencyConverter02();

        double[] rates = {63.0, 3.0, 3.0, 595, 18, 107, 2};
        cc.setExchangeRates(rates);
        cc.printCurrencies();
        cc.updateExchangeRates(1, 100.00);
        cc.printCurrencies();
        double amount = cc.computeTransferAmount(0, 20);
        System.out.println("\n\n Transferred amount: " + amount);
    }
}