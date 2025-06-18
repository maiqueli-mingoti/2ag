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
}
