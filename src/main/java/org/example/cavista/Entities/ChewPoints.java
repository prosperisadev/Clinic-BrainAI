package org.example.cavista.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.cavista.User.User;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChewPoints {
    @Id
    @SequenceGenerator(
            name = "chewpoints_Id",
            sequenceName = "chewpoints_Id",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "user_Id",
            strategy = GenerationType.SEQUENCE
    )
    private Long Id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chew_id", unique = true)
    private User chew;

    private Integer totalPoints;
    private Integer totalPatientsCaptured;
}
