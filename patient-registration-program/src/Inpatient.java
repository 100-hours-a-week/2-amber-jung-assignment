import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Inpatient extends Patient {
    private int roomNumber;
    private LocalDate startDate;
    private LocalDate endDate;

    public Inpatient(String name, int age, Gender gender, int diseaseCode, LocalDate visitDate, int roomNumber, LocalDate startDate, LocalDate endDate) {
        super(name, age, gender, diseaseCode, visitDate);
        this.roomNumber = roomNumber;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public void printInPatientInfo() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        String endDateString = this.endDate == null ? "현재" : endDate.format(formatter);

        this.printPatientInfo();
        System.out.printf("%s %04d호\n", "> 호실:", this.roomNumber);
        System.out.println("> 입원 기간: " + this.startDate.format(formatter) + " - " + endDateString);
    }
}
