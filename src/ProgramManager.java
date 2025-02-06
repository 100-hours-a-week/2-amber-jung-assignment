import java.util.List;

public final class ProgramManager {

    private static void printOptions(List<String> options) {
        for (int i = 0; i < options.size(); i++) {
            System.out.printf("%d. %s\n", i + 1, options.get(i));
        }
    }

    public static void showPatientType() {
        System.out.println(Constants.GET_PATIENT_TYPE_MESSAGE);
        printOptions(List.of("외래 환자", "입원 환자"));
    }

    public static void showGenderOptions() {
        System.out.println(Constants.GET_PERSON_GENDER_MESSAGE);
        printOptions(List.of("남자", "여자"));
    }

    public static void printInfo(List<Patient> patientList) {
        for (Patient patient : patientList) {
            if (patient instanceof Inpatient inpatient) { // 입원 환자 정보 출력
                System.out.println(Constants.INPATIENT_TITLE_MESSAGE);
                inpatient.printInPatientInfo();
            } else { // 외래 환자 정보 출력
                System.out.println(Constants.PATIENT_TITLE_MESSAGE);
                patient.printPatientInfo();
            }
            System.out.println();
        }
    }

    public static void endProgram() {
        System.out.println(Constants.END_MESSAGE);
        System.out.println(Constants.LINE);
    }

    private ProgramManager() {
    }
}
