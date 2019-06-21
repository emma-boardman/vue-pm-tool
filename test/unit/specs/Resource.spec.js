import { mount } from '@vue/test-utils'
import Resource from '../../../src/components/Resource/Resource'


describe('Resource', () => {
    test('should render resource rows and data correctly', () => {
        const wrapper = mount(Resource, {
            propsData: {
                resourceObj: 
            {
                "resourceId": "1",
                "resourceName": "Bernard",
                "resourceJobTitle": "Back End Developer",
                "resourceContractType": "Full time",
                "tasks": [
                    {
                        "taskId": "1",
                        "taskTitle": "Can you punch up the fun level",
                        "taskAffectedArea": "Churning anomalies",
                        "taskErroneousBehaviour": "concept is bang on, but can we look at a better execution",
                        "taskExpectedBehaviour": "i was wondering if my cat could be placed over the logo in the flyer we have big contacts we will promote you that's great",
                        "taskImpact": "low",
                        "taskStartTime": "Mon0900",
                        "taskEndTime": "Mon1400",
                        "taskEstimate": "5",
                        "projectTitle": "Marketing Microsite",
                        "clientName": "Delos"
                    },
                    {
                        "taskId": "2",
                        "taskTitle": "Could you move it a tad to the left",
                        "taskAffectedArea": "Long pole in my tent",
                        "taskErroneousBehaviour": "I know you've made thirty iterations but can we go back to the first one that was the best version",
                        "taskExpectedBehaviour": "Can you make it look like this clipart i found can't you just take a picture from the internet?",
                        "taskImpact": "medium",
                        "taskStartTime": "Mon1400",
                        "taskEndTime": "Mon1600",
                        "taskEstimate": "2",
                        "projectTitle": "Marketing Microsite",
                        "clientName": "Delos"
                    },
                    {
                        "taskId": "10",
                        "taskTitle": "tiuhj",
                        "taskAffectedArea": "tiuhjk",
                        "taskErroneousBehaviour": "hj",
                        "taskExpectedBehaviour": "guhj",
                        "taskImpact": "High",
                        "taskStartTime": "Mon1600",
                        "taskEndTime": "Tues1100",
                        "taskEstimate": "4",
                        "projectTitle": "Marketing Microsite",
                        "clientName": "Delos"
                    },
                    {
                        "taskId": "83",
                        "taskTitle": "yui",
                        "taskAffectedArea": "tiuhjk",
                        "taskErroneousBehaviour": "gihuj",
                        "taskExpectedBehaviour": "gyuhuj",
                        "taskImpact": "High",
                        "taskStartTime": "Tues1500",
                        "taskEndTime": "Tues1700",
                        "taskEstimate": "2",
                        "projectTitle": "Main Store",
                        "clientName": "Delos"
                    },
                    {
                        "taskId": "11",
                        "taskTitle": "That sandwich needs to be more playful",
                        "taskAffectedArea": "My screen",
                        "taskErroneousBehaviour": "Can the black be darker can we try some other colours maybe, so make it sexy can you make it stand out more?",
                        "taskExpectedBehaviour": "Nor this was not according to brief this looks perfect",
                        "taskImpact": "High",
                        "taskStartTime": "Tues1100",
                        "taskEndTime": "Tues1500",
                        "taskEstimate": "4",
                        "projectTitle": "Main Store",
                        "clientName": "Shogun World"
                    }
                ],
                "unavailable": [
                    {
                        "naStartTime": "Wed0900",
                        "naEndTime": "Thurs1700",
                        "naReason": "Holiday"
                    }
                ]
            }
            }
        })

        expect(wrapper.props().resourceObj.resourceId).toBe('1')

        expect(wrapper.props().resourceObj.tasks.length).toBe(5)
        
        expect(wrapper.html()).toContain('<div class="resource-name">')
    })
})





