package com.ncr.agent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;

@SpringBootApplication
@EnableBinding(AgentProcessor.class)
public class AgentApplication {

  public static final Logger log = LoggerFactory.getLogger(AgentApplication.class);

  public static void main(String[] args) {
    SpringApplication.run(AgentApplication.class, args);
    log.info("The Agent Application has started...");
  }
}
