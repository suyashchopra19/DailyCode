class Main {

  public static void main(String[] args) {
    Variables newObject1 = new Variables();
    newObject1.method();
    System.out.println(newObject1.data);
    newObject1.changeData(1);
    System.out.println("Should be 1");
    System.out.println(newObject1.data);
    System.out.println(Variables.newData);
  }
}