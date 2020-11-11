package com.ncr.terminal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Supplier;

@SpringBootApplication
public class TerminalApplication {

  private static final Logger log = LoggerFactory.getLogger(TerminalApplication.class);
  private final List<String> channels = Arrays.asList("LISA", "ACTIVATE", "EDGE", "LISA", "ACTIVATE", "EDGE", "LISA", "ACTIVATE", "EDGE");

  public static void main(String[] args) {
    SpringApplication.run(TerminalApplication.class, args);
  }

  @Bean
  public Supplier<Terminal> supplyTerminal(){
    AtomicInteger index = new AtomicInteger(0);

    return () -> {
      Terminal terminal = new Terminal(UUID.randomUUID().toString(),
              "Terminal"+(index),
              channels.get(new Random().nextInt(channels.size())));
      index.getAndIncrement();
      log.info("{} {} for {}", terminal.getStatus(), terminal.getUuid(), terminal.getName());
      return terminal;
    };
  }
}
