public final class Constants {
    public static final String LINE = "------------------------";
    public static final String WELCOME_MESSAGE = "OO 병원 환자 등록 시스템입니다.";
    public static final String ASK_END_MESSAGE = "\n프로그램을 종료하시겠습니까? - ENTER 입력시 종료됩니다. (이외 키 입력시 새 환자 등록)";
    public static final String END_MESSAGE = "프로그램을 종료합니다.";
    public static final String CONTINUE_MESSAGE = "새로운 환자를 등록합니다.";
    public static final String NOT_OPERATING_TIME_MESSAGE = "운영 시간이 아닙니다. (09:00 - 18:00)";

    public static final String GET_PATIENT_TYPE_MESSAGE = "환자 종류를 선택해주세요.";

    public static final String GET_PERSON_NAME_MESSAGE = "이름을 입력해주세요.";
    public static final String GET_PERSON_AGE_MESSAGE = "나이를 입력해주세요. (정수 단위로)";
    public static final String GET_PERSON_GENDER_MESSAGE = "성별을 입력해주세요.";

    public static final String PATIENT_TITLE_MESSAGE = "> 입력된 외래 환자 정보";
    public static final String GET_DISEASE_CODE_MESSAGE = "질병 코드를 입력해주세요. (숫자 네자리)";
    public static final String GET_VISIT_DATE_MESSAGE = "외래 날짜를 입력해주세요. (형식: YYYY.MM.DD) - ENTER 입력시 현재 시간으로 입력됩니다.";

    public static final String INPATIENT_TITLE_MESSAGE = "> 입력된 입원 환자 정보";
    public static final String GET_ROOM_NUMBER_MESSAGE = "병실 호수를 입력해주세요.";
    public static final String GET_START_DATE_MESSAGE = "입원 날짜를 입력해주세요. (형식: YYYY.MM.DD) - ENTER 입력시 현재 시간으로 입력됩니다.";
    public static final String GET_END_DATE_MESSAGE = "퇴원 날짜를 입력해주세요. (형식: YYYY.MM.DD) - ENTER 입력시 '퇴원 날짜 미기입'으로 저장됩니다";

    public static final String SAVE_SUCCESS_MESSAGE = "환자 정보가 성공적으로 저장되었습니다.";
    public static final String PATIENT_TYPE_ERROR_MESSAGE = "존재하지 않는 환자 유형입니다.";
    public static final String PERSON_NAME_ERROR_MESSAGE = "이름을 입력하지 않았습니다.";
    public static final String PERSON_AGE_ERROR_MESSAGE = "유효하지 않은 값입니다.";
    public static final String PERSON_GENDER_ERROR_MESSAGE = "유효하지 않은 성별입니다.";
    public static final String DISEASE_CODE_ERROR_MESSAGE = "유효하지 않은 질병코드입니다.";
    public static final String ROOM_NUMBER_ERROR_MESSAGE = "유효하지 않은 호실입니다.";
    public static final String DATE_TIME_ERROR_MESSAGE = "날짜 형식이 올바르지 않습니다.";

    private Constants() {
    }
}
