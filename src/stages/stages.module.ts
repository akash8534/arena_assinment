import { Injectable } from '@nestjs/common';

@Injectable()
export class StagesService {
  private stages = [];

  scheduleStage(stage: any) {
    const newStage = {
      ...stage,
      stage_id: `stage-${Date.now()}`,
      status: 'scheduled',
    };
    this.stages.push(newStage);
    return newStage;
  }

  getUpcomingStages() {
    return {
      count: this.stages.length,
      results: this.stages,
    };
  }
}
