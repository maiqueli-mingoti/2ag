package dev.uffs.doisag.service;

import dev.uffs.doisag.model.Appointment;
import dev.uffs.doisag.repository.AppointmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    // create
    public Appointment create (Appointment appointment){
        return appointmentRepository.save(appointment);
    }
    // read todos
    public List<Appointment> getAll(){
        return appointmentRepository.findAll();
    }
    // read por id
    public Optional<Appointment> getById(Long id){
        return appointmentRepository.findById(id);
    }

    // update
    public Appointment update(Long id, Appointment appointmentDetails){
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Consulta não encontrada para o id:: " + id));

        appointment.setDateTime(appointmentDetails.getDateTime());
        appointment.setModality(appointmentDetails.getModality());
        appointment.setStatus(appointmentDetails.getStatus());
        appointment.setDiagnosis(appointmentDetails.getDiagnosis());
        appointment.setClinicalObservation(appointmentDetails.getClinicalObservation());
        appointment.setTherapeuticPlan(appointmentDetails.getTherapeuticPlan());
        appointment.setEvolution(appointmentDetails.getEvolution());

        return appointmentRepository.save(appointment);
    }

    // delete
    public void delete(Long id){
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Consulta não encontrada para o id :: " + id));

        appointmentRepository.delete(appointment);
    }

}
