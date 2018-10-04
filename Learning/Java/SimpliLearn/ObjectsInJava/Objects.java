import java.util.Scanner;

class Object {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.print("Enter your Name:");
    String name = s.nextLine();
    System.out.print("Name: " + name);
  }
}