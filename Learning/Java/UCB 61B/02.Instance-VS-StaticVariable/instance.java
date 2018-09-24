/**
 * Instance Variable: scope of Object Should be declared within the class body
 * but outside any block, method or constructor
 * 
 */

class instanceVar {
  int i;

  public static void main(String args[]) {
    instanceVar obj = new instanceVar();
    System.out.println(obj.i);
  }
}
