package dev.uffs.doisag.model;

import jakarta.persistence.Entity;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class SleepLog extends BaseAssessment {
    private LocalTime bedTime;
    private LocalTime wakeUpTime;
    private float timeInBed;
    private int timeToFallAsleep;
    private int timesWokenUp;
    private int totalTimeAwake;
    private float totalSleepTime;
    private Boolean isCommonDay;
    private int fatigue;
    private int stress;
    private int daytimeSleepiness;
    private int inattention;
    private int irritability;
    private int pain;
    private String healthPerception;
    private float physicalActivityTime;
    private float timeAwayFromHome;
    private Boolean usedSleepMedication;
    private int alcoholConsumption;
    private int napsTime;
    private int coffeeConsumption;
    private int nighttimeSmoking;
    private int totalTimeAwakeDuringNight;

    public SleepLog(Long id, LocalDate assessmentDate, Patient patient, LocalTime bedTime, LocalTime wakeUpTime, float timeInBed, int timeToFallAsleep, int totalTimeAwake, int timesWokenUp, float totalSleepTime, Boolean isCommonDay, int fatigue, int stress, int daytimeSleepiness, int inattention, int irritability, int nighttimeSmoking, int coffeeConsumption, int napsTime, int alcoholConsumption, float timeAwayFromHome, Boolean usedSleepMedication, float physicalActivityTime, String healthPerception, int pain) {
        super(id, assessmentDate, patient);
        this.bedTime = bedTime;
        this.wakeUpTime = wakeUpTime;
        this.timeInBed = timeInBed;
        this.timeToFallAsleep = timeToFallAsleep;
        this.totalTimeAwake = totalTimeAwake;
        this.timesWokenUp = timesWokenUp;
        this.totalSleepTime = totalSleepTime;
        this.isCommonDay = isCommonDay;
        this.fatigue = fatigue;
        this.stress = stress;
        this.daytimeSleepiness = daytimeSleepiness;
        this.inattention = inattention;
        this.irritability = irritability;
        this.nighttimeSmoking = nighttimeSmoking;
        this.coffeeConsumption = coffeeConsumption;
        this.napsTime = napsTime;
        this.alcoholConsumption = alcoholConsumption;
        this.timeAwayFromHome = timeAwayFromHome;
        this.usedSleepMedication = usedSleepMedication;
        this.physicalActivityTime = physicalActivityTime;
        this.healthPerception = healthPerception;
        this.pain = pain;
    }

    public SleepLog() {
    }

    public int getTotalTimeAwake() {
        return totalTimeAwake;
    }

    public void setTotalTimeAwake(int totalTimeAwake) {
        this.totalTimeAwake = totalTimeAwake;
    }

    public LocalTime getBedTime() {
        return bedTime;
    }

    public void setBedTime(LocalTime bedTime) {
        this.bedTime = bedTime;
    }

    public LocalTime getWakeUpTime() {
        return wakeUpTime;
    }

    public void setWakeUpTime(LocalTime wakeUpTime) {
        this.wakeUpTime = wakeUpTime;
    }

    public float getTimeInBed() {
        return timeInBed;
    }

    public void setTimeInBed(float timeInBed) {
        this.timeInBed = timeInBed;
    }

    public int getTimeToFallAsleep() {
        return timeToFallAsleep;
    }

    public void setTimeToFallAsleep(int timeToFallAsleep) {
        this.timeToFallAsleep = timeToFallAsleep;
    }

    public int getTimesWokenUp() {
        return timesWokenUp;
    }

    public void setTimesWokenUp(int timesWokenUp) {
        this.timesWokenUp = timesWokenUp;
    }

    public float getTotalSleepTime() {
        return totalSleepTime;
    }

    public void setTotalSleepTime(float totalSleepTime) {
        this.totalSleepTime = totalSleepTime;
    }

    public Boolean getCommonDay() {
        return isCommonDay;
    }

    public void setCommonDay(Boolean commonDay) {
        isCommonDay = commonDay;
    }

    public int getFatigue() {
        return fatigue;
    }

    public void setFatigue(int fatigue) {
        this.fatigue = fatigue;
    }

    public int getStress() {
        return stress;
    }

    public void setStress(int stress) {
        this.stress = stress;
    }

    public int getDaytimeSleepiness() {
        return daytimeSleepiness;
    }

    public void setDaytimeSleepiness(int daytimeSleepiness) {
        this.daytimeSleepiness = daytimeSleepiness;
    }

    public int getInattention() {
        return inattention;
    }

    public void setInattention(int inattention) {
        this.inattention = inattention;
    }

    public int getIrritability() {
        return irritability;
    }

    public void setIrritability(int irritability) {
        this.irritability = irritability;
    }

    public int getPain() {
        return pain;
    }

    public void setPain(int pain) {
        this.pain = pain;
    }

    public String getHealthPerception() {
        return healthPerception;
    }

    public void setHealthPerception(String healthPerception) {
        this.healthPerception = healthPerception;
    }

    public float getPhysicalActivityTime() {
        return physicalActivityTime;
    }

    public void setPhysicalActivityTime(float physicalActivityTime) {
        this.physicalActivityTime = physicalActivityTime;
    }

    public float getTimeAwayFromHome() {
        return timeAwayFromHome;
    }

    public void setTimeAwayFromHome(float timeAwayFromHome) {
        this.timeAwayFromHome = timeAwayFromHome;
    }

    public Boolean getUsedSleepMedication() {
        return usedSleepMedication;
    }

    public void setUsedSleepMedication(Boolean usedSleepMedication) {
        this.usedSleepMedication = usedSleepMedication;
    }

    public int getAlcoholConsumption() {
        return alcoholConsumption;
    }

    public void setAlcoholConsumption(int alcoholConsumption) {
        this.alcoholConsumption = alcoholConsumption;
    }

    public int getNapsTime() {
        return napsTime;
    }

    public void setNapsTime(int napsTime) {
        this.napsTime = napsTime;
    }

    public int getCoffeeConsumption() {
        return coffeeConsumption;
    }

    public void setCoffeeConsumption(int coffeeConsumption) {
        this.coffeeConsumption = coffeeConsumption;
    }

    public int getNighttimeSmoking() {
        return nighttimeSmoking;
    }

    public void setNighttimeSmoking(int nighttimeSmoking) {
        this.nighttimeSmoking = nighttimeSmoking;
    }

    public int getTotalTimeAwakeDuringNight() {
        return totalTimeAwakeDuringNight;
    }

    public void setTotalTimeAwakeDuringNight(int totalTimeAwakeDuringNight) {
        this.totalTimeAwakeDuringNight = totalTimeAwakeDuringNight;
    }
}
