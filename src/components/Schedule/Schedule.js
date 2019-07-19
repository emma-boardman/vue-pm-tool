<template>
<div>
{/* <li class="form-row">
              <label for="resourceId">Resource</label>
              <select id="resourceId" v-model="task.taskResource" required>
                <option
                  v-for="resource in resources"
                  :key="resource.resourceId"
                  :value="resource.resourceId"
                >{{ resource.resourceName }}</option>
              </select>
            </li>
            <li class="form-row">
              <label for="taskEstimate">Estimate (hours)</label>
              <input
                type="number"
                id="taskEstimate"
                v-model="task.taskEstimate"
                @blur="$emit('handleEstimate', {resourceId: task.taskResource, taskEstimate: task.taskEstimate})"
                required
              />
            </li>
            <li class="form-row">
              <label for="taskSchedule">First Available Time Slot</label>
              <div>
                <div v-if="availableTimes.endTime === ''">
                  <p>Requires resource and estimate input</p>
                </div>
                <div v-else class="timeslots">
                  <input
                    readonly
                    v-model="availableTimes.startTime"
                    :placeholder="availableTimes.startTime"
                  /> -
                  <input
                    readonly
                    v-model="availableTimes.endTime"
                    :placeholder="availableTimes.endTime"
                  />
                </div>
              </div>
            </li> */}
            </div>
</template>