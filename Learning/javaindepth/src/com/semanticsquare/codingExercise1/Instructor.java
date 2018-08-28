public class Instructor {
    public long id;
    public String name;
    public String title;
    public String department;
    public Book[] books;

    public Instructor(long id, String name, String title, String department, Book[] books) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.department = department;
        this.books = books;
    }

    public Instructor(long id, String name, String title, String department) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.department = department;
    }

    public Instructor(long id, String name, String title) {
        this.id = id;
        this.name = name;
        this.title = title;
    }

    public Instructor(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getMostRecentBookTitle() {
        // String recentBook = "";
        // recentBook += this.books.title[books.length - 1];
        // return recentBook;
        return this.books[this.books.length - 1].title;
    }

    public String getTitle(){
        return this.books[1].title;
    }

    public String updateBook(int index, String title) {
        return this.books[index].title = title;
        // return "Book Updated";
    }

    public String updateBook(int index, Book book) {
        this.books[index] = book;
        // return "Book Array Updated";
    }

    public static void main(String[] args) {
        Book book1 = new Book("Java for Beginners");
        Book book2 = new Book("Scala for Beginners");
        Book book3 = new Book("Effective Python");

        Instructor instructor = new Instructor(101, "John", "Assistant Professor", "Computer Science",
                new Book[] { book1, book2, book3 });
        System.out.println(instructor.getMostRecentBookTitle());
        System.out.println("old book title: " + instructor.updateBook(1, "Effective C#").getTitle());

        Book book4 = new Book("Introduction to Data Mining");
        // System.out.println("old book title: " + instructor.updateBook(1, book4).getTitle());
    }
}