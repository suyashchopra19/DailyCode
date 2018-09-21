public class ArgSum {
  public static void main(String... args) {
    int N = args.length;
    int i = 0;
    int sum = 0;

    while (i < N) {
      sum += Integer.parseInt(args[i]);
      i += 1;
    }
    System.out.println(sum);
  }
}