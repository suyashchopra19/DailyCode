import java.util.Arrays;

public class StudentUtil {

  public static double[] calculateGPA(int[] studentIdList, char[][] studentsGrades) {
    double Average[] = new double[studentIdList.length];
    for (int count = 0; count < studentIdList.length; count++) {
      int sum = 0;
      int elementCount = studentsGrades[count].length;
      for (int innerCount = 0; innerCount < elementCount; innerCount++) {
        if (studentsGrades[count][innerCount] == 'A')
          sum = sum + 4;
        else if (studentsGrades[count][innerCount] == 'B')
          sum = sum + 3;
        else if (studentsGrades[count][innerCount] == 'C')
          sum = sum + 2;
      }
      Average[count] = sum / elementCount;
    }
    System.out.println(Arrays.toString(Average));
    return Average;
  }

  public static int[] getStudentsByGPA(double lower, double higher, int[] studentIdList, char[][] studentsGrades) {
    // perform parameter validation. Return null if passed parameters are not valid
    if (lower < 0.0 || higher > 4.0) {
      return studentIdList;
    }
    int outputCount = 0;
    double result[] = new double[studentIdList.length];
    // invoke calculateGPA
    result = calculateGPA(studentIdList, studentsGrades);
    int output[] = new int[studentIdList.length];
    // construct the result array and return it. You would need an extra for loop to
    // compute the size of the resulting array
    for (int count = 0; count < studentIdList.length; count++) {
      if (result[count] >= lower && result[count] <= higher) {
        output[outputCount] = studentIdList[count];
        outputCount += 1;
      }
    }
    int newArray[] = new int[outputCount];
    for (int count = 0; count < outputCount; count++) {
      newArray[count] = output[count];
    }
    return newArray;
  }

  public static void main(String[] args) {
    int[] studentIdList = { 1000, 1001 };
    char[][] studentsGrades = { { 'A', 'A', 'A', 'B' }, { 'A', 'A' } };
    double lower = 3.5;
    double higher = 4.0;
    // calculateGPA(studentIdList, studentsGrades);
    int result[] = new int[studentIdList.length];
    result = getStudentsByGPA(lower, higher, studentIdList, studentsGrades);
    System.out.print(Arrays.toString(result));
  }
}
