package dev.uffs.doisag.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productDescription;
    private String posology;
    private String brand;
    private String concentration;
    private String spectrum;
    private String observation;

    public Prescription() {
    }

    public Prescription(String brand, String concentration, Long id, String observation, String posology, String productDescription, String spectrum) {
        this.brand = brand;
        this.concentration = concentration;
        this.id = id;
        this.observation = observation;
        this.posology = posology;
        this.productDescription = productDescription;
        this.spectrum = spectrum;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getConcentration() {
        return concentration;
    }

    public void setConcentration(String concentration) {
        this.concentration = concentration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }

    public String getPosology() {
        return posology;
    }

    public void setPosology(String posology) {
        this.posology = posology;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getSpectrum() {
        return spectrum;
    }

    public void setSpectrum(String spectrum) {
        this.spectrum = spectrum;
    }
}
