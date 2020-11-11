package com.ncr.agent;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;
import org.springframework.stereotype.Component;

@Component
public interface AgentProcessor {

  String TERMINALS_IN = "output";
  String ACTIVE_OUT = "active";
  String ERROR_OUT = "error";

  @Input(TERMINALS_IN)
  SubscribableChannel terminals();

  @Output(ACTIVE_OUT)
  MessageChannel active();

  @Output(ERROR_OUT)
  MessageChannel error();

}
