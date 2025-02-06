import java.time.LocalDateTime;
import java.time.LocalTime;

public class TimeChecker implements Runnable {
    private final static LocalTime closeTime = LocalTime.of(10, 0);

    @Override
    public void run() {
        while (true) {
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime closeDateTime = now.with(closeTime);

            if (now.isAfter(closeDateTime)) {
                System.out.println(Constants.LINE);
                System.out.println(Constants.NOT_OPERATING_TIME_MESSAGE);
                Thread.currentThread().getThreadGroup().interrupt();
                ProgramManager.endProgram();
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                ProgramManager.endProgram();
            }
        }
    }
}
