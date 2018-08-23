//1. Create the object
//2. Set the Student State
//3. Use Methods on objects to update states
class User{
    int id;
    String name;
    int salary;

    User(int userId, String userName){
        id = userId;
        name = userName;
    }

    User(int userId, String userName, int userSalary){
        this(userId, userName);//this invocation has refers to the overloaded constructor with the paramteres
        salary = userSalary;
    }

    public static void main(String... args){
        User instructor = new User(1002,"Instructor:Suyash", 50000);
        System.out.println("name : " + instructor.name);
    }
}