public class Person {
    private String name;
    private int age;
    private Gender gender;

    public enum Gender {
        MALE, FEMALE
    }

    public Person(String name, int age, Gender gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public void printPersonInfo() {
        String gender = this.gender == Gender.MALE ? "남" : "여";

        System.out.println("> 이름: " + this.name + " (" + gender + ")");
        System.out.println("> 나이: " + this.age + "세");
    }
}
