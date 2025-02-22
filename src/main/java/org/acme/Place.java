package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Place extends PanacheEntity {
    @Column(nullable = false)
    public String name;

    @Column(nullable = false)
    public String location;

    @Column(length = 1000)
    public String description;

    @Column(columnDefinition = "TEXT") // Store Base64 image
    public String image;
}

