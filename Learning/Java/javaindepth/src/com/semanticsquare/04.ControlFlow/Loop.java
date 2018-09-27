public class Loop {
  public static void main(String... args) {
    int[] arr = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]);
    }
    // can be written as
    for (int i : arr) {
      System.out.println(i);
    }
  }
}
