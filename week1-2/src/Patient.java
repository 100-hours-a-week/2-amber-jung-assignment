import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Patient extends Person {
    private int diseaseCode;
    private LocalDate visitDate;

    public Patient(String name, int age, Gender gender, int diseaseCode, LocalDate visitDate) {
        super(name, age, gender);
        this.diseaseCode = diseaseCode;
        this.visitDate = visitDate;
    }

    public void printPatientInfo() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");

        this.printPersonInfo();
        System.out.printf("%s %04d\n", "> 질병 코드:", this.diseaseCode);
        System.out.println("> 외래 날짜: " + this.visitDate.format(formatter));
    }
}
