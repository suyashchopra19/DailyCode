// Create a class called CurrencyConverter (CurrencyConverter.java) and it includes:

// 1. Following int variables representing currency exchange rates for different countries relative to 1 US dollar.  For instance the first variable is rupee and it has a value 63  indicating that 1 US dollar is equal to 63 rupees. Similarly, second  variable is dirham and it has a value 3 indicating that 1 US dollar is  equal to 3 dirhams. Last 4 variables are a bit different and are  included to remind you about certain aspects of variable names, which  were discussed in the lectures: (a) _yen & $australian indicate that  variables can start with underscore and dollar in addition to letter  (same applies to methods & class names too), b) variable name dollar  is not initialized with a value, i.e., it gets a default of 0. c) Final  variable is Rupee and it is different from the first variable rupee as  both have different cases (keep in mind that Java is case-sensitive). In  reality, currency exchange rates are real numbers like 63.52 and will be  represented by other data types, but for now let's not worry about  that.

// rupee = 63;

// dirham = 3; // UAE

// real = 3;  // brazilian     

// chilean_peso = 595;

// mexican_peso = 18;       

// _yen = 107;

// $australian = 2;  // australian dollar

// dollar;

// Rupee = 63;

// 2. In the same class write a method called printCurrencies() whose return type is void and it should print all  the variables declared above in the class. Below are two sample print  statements and they would print 'rupee: 63' & '$australian: 2'. So,   '+' is a concatenation operator and it would append the value of the  variable to the string in double quotes. We know that '+' is used for addition and that is the case when we are dealing with numeric values. However, when Strings are involved, then it would work as concatenation operator appending one string to another.

// void printCurrencies() {

//    System.out.println("rupee: " + rupee);   

//    System.out.println("$australian: " + $australian);

// }

// 3. Include a main method and it should include following statements. As we know, the first statement creates an object and in the second statement we are invoking the printCurrencies() method on the created object.

// CurrencyConverter cc = new CurrencyConverter();

// cc.printCurrencies();

// In addition to submitting your solution, I would also suggest to go ahead and actually code the entire class (CurrencyConverter.java) in the basics directory and compile and then run it and you should see all the currencies and their values printed.

public class CurrencyConverter{

    int rupee = 63; //
    int dirham = 3; // UAE
    int real = 3; // brazilian

    int chilean_peso = 595;
    int mexican_peso = 18;

    int _yen = 107;
    int $australian = 2;
    int dollar;
    int Rupee = 63;

    void printCurrencies() {
        System.out.println("rupee: " + rupee);
        System.out.println("dirham: " + dirham);
        System.out.println("real: " + real);
        System.out.println("chilean_peso: " + chilean_peso);
        System.out.println("mexican_peso: " + mexican_peso);
        System.out.println("_yen: " + _yen);
        System.out.println("$australian: " + $australian);
        System.out.println("dollar: " + dollar);
        System.out.println("Rupee: " + Rupee);
    }
    
    public static void main(String[] args){
        CurrencyConverter cc = new CurrencyConverter();
        cc.printCurrencies();
    }
}