package org.example.cavista.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.cavista.Entities.Outcome;
import org.example.cavista.Entities.Visit;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @SequenceGenerator(
            name = "user_Id",
            sequenceName = "user_Id",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "user_Id",
            strategy = GenerationType.SEQUENCE
    )
    private Long Id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private LocalDate dob;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "chew")
    private List<Visit> visits = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "doctor")
    private List<Outcome> outcomes = new ArrayList<>();

}
