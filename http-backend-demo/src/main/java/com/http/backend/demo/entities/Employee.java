package com.http.backend.demo.entities;

import com.axonivy.persistence.beans.AuditableEntity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Employee")
public class Employee extends AuditableEntity implements Serializable {

    @Column
    @Id
    @GeneratedValue
    private String id;

    @Column
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
