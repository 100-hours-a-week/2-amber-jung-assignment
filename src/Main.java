import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        List<Patient> patientList = new ArrayList<>();

        Scanner scanner = new Scanner(System.in);
        System.out.println(Constants.LINE);
        System.out.println(Constants.WELCOME_MESSAGE);

        try {
            while (true) {

                // 환자 유형 입력
                Constants.showPatientType();
                String patientTypeString = scanner.nextLine().trim();
                int patientType;
                try {
                    patientType = Integer.parseInt(patientTypeString);
                    if (patientType != 1 && patientType != 2) throw new Error(Constants.PATIENT_TYPE_ERROR_MESSAGE);
                } catch (Exception e) {
                    throw new Error(Constants.PATIENT_TYPE_ERROR_MESSAGE);
                }

                // 이름 입력
                System.out.println(Constants.GET_PERSON_NAME_MESSAGE);
                String name = scanner.nextLine().trim();
                if (name.isEmpty()) throw new Error(Constants.PERSON_NAME_ERROR_MESSAGE);

                // 나이 입력
                System.out.println(Constants.GET_PERSON_AGE_MESSAGE);
                int age = 0;
                try {
                    String ageString = scanner.nextLine().trim();
                    age = Integer.parseInt(ageString);
                    if (age < 0 || age > 120) throw new Error(Constants.PERSON_AGE_ERROR_MESSAGE);
                } catch (Exception e) {
                    throw new Error(Constants.PERSON_AGE_ERROR_MESSAGE);
                }

                // 성별 입력
                Constants.showGenderOptions();
                String genderString = scanner.nextLine().trim();
                int genderInt = 1;
                try {
                    genderInt = Integer.parseInt(genderString);
                    if (genderInt != 1 && genderInt != 2) throw new Error(Constants.PERSON_GENDER_ERROR_MESSAGE);
                } catch (Exception e) {
                    throw new Error(Constants.PERSON_GENDER_ERROR_MESSAGE);
                }
                Person.Gender gender = genderInt == 1 ? Person.Gender.MALE : Person.Gender.FEMALE;

                // 질병 코드 입력
                System.out.println(Constants.GET_DISEASE_CODE_MESSAGE);
                String diseaseCodeString = scanner.nextLine().trim();
                int diseaseCode;
                try {
                    diseaseCode = Integer.parseInt(diseaseCodeString);
                    if (diseaseCode > 9999) throw new Error(Constants.DISEASE_CODE_ERROR_MESSAGE);
                } catch (Exception e) {
                    throw new Error(Constants.DISEASE_CODE_ERROR_MESSAGE);
                }

                // 외래 날짜 입력 - 미입력시 Default 값(현재시간)으로 입력됨
                System.out.println(Constants.GET_VISIT_DATE_MESSAGE);
                String visitDateString = scanner.nextLine().trim();
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
                LocalDate visitDate;
                if (visitDateString.isEmpty()) visitDate = LocalDate.now();
                else {
                    try {
                        visitDate = LocalDateTime.of(LocalDate.parse(visitDateString, formatter), LocalTime.now()).toLocalDate();
                    } catch (DateTimeParseException e) {
                        throw new Error(Constants.DATE_TIME_ERROR_MESSAGE);
                    }
                }

                if (patientType == 1) {
                    // 외래 환자 인스턴스 생성
                    Patient patient = new Patient(name, age, gender, diseaseCode, visitDate);
                    patientList.add(patient);

                    System.out.println(Constants.LINE);
                    System.out.println(Constants.SAVE_SUCCESS_MESSAGE);
                } else {
                    // 입원 호실 입력
                    System.out.println(Constants.GET_ROOM_NUMBER_MESSAGE);
                    String roomNumberString = scanner.nextLine().trim();
                    int roomNumber;
                    try {
                        roomNumber = Integer.parseInt(roomNumberString);
                    } catch (Exception e) {
                        throw new Error(Constants.ROOM_NUMBER_ERROR_MESSAGE);
                    }

                    // 입원 날짜 입력 - 미입력시 Default 값(현재시간)으로 입력됨
                    System.out.println(Constants.GET_START_DATE_MESSAGE);
                    String startDateString = scanner.nextLine().trim();
                    LocalDate startDate;
                    if (startDateString.isEmpty()) startDate = LocalDate.now();
                    else {
                        try {
                            startDate = LocalDateTime.of(LocalDate.parse(startDateString, formatter), LocalTime.now()).toLocalDate();
                        } catch (DateTimeParseException e) {
                            throw new Error(Constants.DATE_TIME_ERROR_MESSAGE);
                        }
                    }

                    // 퇴원 날짜 입력 - 입력시에만 인스턴스에 endDate 값 저장됨
                    System.out.println(Constants.GET_END_DATE_MESSAGE);
                    String endDateString = scanner.nextLine().trim();
                    LocalDate endDate = null;
                    if (!startDateString.isEmpty()) {
                        try {
                            endDate = LocalDateTime.of(LocalDate.parse(endDateString, formatter), LocalTime.now()).toLocalDate();
                        } catch (DateTimeParseException e) {
                            throw new Error(Constants.DATE_TIME_ERROR_MESSAGE);
                        }
                    }

                    // 입원 환자 인스턴스 생성
                    Inpatient inpatient = new Inpatient(name, age, gender, diseaseCode, visitDate, roomNumber, startDate, endDate);
                    patientList.add(inpatient);

                    System.out.println(Constants.LINE);
                    System.out.println(Constants.SAVE_SUCCESS_MESSAGE);
                }

                System.out.println(Constants.ASK_END_MESSAGE);
                String endSTring = scanner.nextLine().trim();
                if (endSTring.isEmpty()) {
                    Constants.printInfo(patientList);
                    Constants.endProgram();
                    break;
                }
                System.out.println(Constants.CONTINUE_MESSAGE);
                System.out.println(Constants.LINE);
            }

        } catch (Error e) {
            System.out.println("[ERROR] " + e.getMessage());
            Constants.printInfo(patientList);
            Constants.endProgram();
            System.exit(0);
        }
    }


}