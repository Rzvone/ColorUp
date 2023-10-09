package com.codecool.colorup.controller;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class AppointmentRequestDTO {
    private List<Long> serviceIds;
    private Long providerId;
    private LocalDateTime start;
}
