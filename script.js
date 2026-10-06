```javascript id="l3zq7w"
let selectedMuscle = "";
let selectedLevel = "";

const exercises = {

    Chest: {
        Beginner: [
            ["Push-Ups", "Basic chest exercise. Keep your body straight and lower your chest toward the floor."],
            ["Wall Push-Ups", "Stand facing a wall and push your body away from the wall."],
            ["Knee Push-Ups", "Perform push-ups with your knees on the floor."]
        ],

        Intermediate: [
            ["Push-Ups", "Keep your core tight and lower your chest with control."],
            ["Dumbbell Bench Press", "Press dumbbells upward while keeping your shoulders stable."],
            ["Incline Push-Ups", "Place your hands on an elevated surface and perform controlled push-ups."]
        ],

        Advanced: [
            ["Decline Push-Ups", "Place your feet on an elevated surface and perform push-ups."],
            ["Diamond Push-Ups", "Place your hands close together and lower your body with control."],
            ["Weighted Push-Ups", "Add resistance while maintaining proper push-up form."]
        ]
    },

    Back: {
        Beginner: [
            ["Resistance Band Row", "Pull the band toward your body while keeping your back straight."],
            ["Bird Dog", "Extend the opposite arm and leg while keeping your core stable."],
            ["Superman", "Lie face down and gently raise your arms and legs."]
        ],

        Intermediate: [
            ["Lat Pulldown", "Pull the bar toward your upper chest while keeping your shoulders down."],
            ["Dumbbell Row", "Pull the dumbbell toward your hip while maintaining a flat back."],
            ["Seated Cable Row", "Pull the handle toward your torso and squeeze your shoulder blades."]
        ],

        Advanced: [
            ["Pull-Ups", "Pull your body upward while keeping your core controlled."],
            ["Weighted Pull-Ups", "Perform pull-ups with additional resistance."],
            ["Barbell Row", "Hinge at the hips and pull the bar toward your torso."]
        ]
    },

    Shoulders: {
        Beginner: [
            ["Front Raise", "Raise the weights in front of your body with controlled movement."],
            ["Lateral Raise", "Raise your arms to the sides until they reach shoulder height."],
            ["Wall Angels", "Move your arms against the wall while maintaining good posture."]
        ],

        Intermediate: [
            ["Dumbbell Shoulder Press", "Press dumbbells overhead while keeping your core stable."],
            ["Lateral Raise", "Raise dumbbells to shoulder height without swinging."],
            ["Arnold Press", "Rotate the dumbbells as you press overhead."]
        ],

        Advanced: [
            ["Military Press", "Press the bar overhead while maintaining a stable torso."],
            ["Pike Push-Ups", "Use a pike position to emphasize the shoulders."],
            ["Handstand Push-Ups", "Perform controlled pressing movements while inverted."]
        ]
    },

    Arms: {
        Beginner: [
            ["Bicep Curl", "Curl the weights upward while keeping your elbows close to your body."],
            ["Tricep Extension", "Extend the arms overhead while keeping your elbows stable."],
            ["Wall Push-Ups", "Use a wall for an easier upper-body pushing movement."]
        ],

        Intermediate: [
            ["Hammer Curl", "Curl dumbbells with your palms facing each other."],
            ["Tricep Dips", "Lower your body using your arms while keeping your shoulders controlled."],
            ["Concentration Curl", "Perform a controlled curl while supporting your arm on your thigh."]
        ],

        Advanced: [
            ["Chin-Ups", "Pull your body upward using an underhand grip."],
            ["Close-Grip Push-Ups", "Use a narrow hand position to emphasize the triceps."],
            ["Weighted Dips", "Perform dips while adding resistance."]
        ]
    },

    Legs: {
        Beginner: [
            ["Bodyweight Squat", "Lower your hips while keeping your chest up and knees controlled."],
            ["Glute Bridge", "Raise your hips while squeezing your glutes."],
            ["Step-Ups", "Step onto a stable platform and return with control."]
        ],

        Intermediate: [
            ["Goblet Squat", "Hold a dumbbell close to your chest while performing a squat."],
            ["Reverse Lunges", "Step backward and lower your body while maintaining balance."],
            ["Romanian Deadlift", "Hinge at the hips while keeping your back neutral."]
        ],

        Advanced: [
            ["Barbell Squat", "Perform a controlled squat with a barbell while maintaining proper posture."],
            ["Bulgarian Split Squat", "Perform a single-leg squat with your rear foot elevated."],
            ["Deadlift", "Lift the bar from the floor using controlled hip and knee extension."]
        ]
    },

    Abs: {
        Beginner: [
            ["Crunches", "Lift your upper body using your abdominal muscles without pulling your neck."],
            ["Dead Bug", "Move opposite arms and legs while keeping your lower back controlled."],
            ["Plank", "Keep your body straight while supporting yourself on your arms."]
        ],

        Intermediate: [
            ["Leg Raises", "Raise your legs while keeping your core engaged."],
            ["Russian Twists", "Rotate your torso from side to side while maintaining control."],
            ["Mountain Climbers", "Alternate driving your knees toward your chest."]
        ],

        Advanced: [
            ["Hanging Leg Raises", "Raise your legs while hanging and control the movement."],
            ["Ab Wheel Rollout", "Extend your body forward while maintaining a strong core."],
            ["Dragon Flags", "Lower your body with control while keeping your core engaged."]
        ]
    }
};


function selectMuscle(muscle) {
    selectedMuscle = muscle;
    updateResults();
}


function selectLevel(level) {
    selectedLevel = level;
    updateResults();
}


function updateResults() {

    const status = document.getElementById("selection-status");
    const results = document.getElementById("exercise-results");

    if (!selectedMuscle || !selectedLevel) {

        status.innerHTML =
            "Select a muscle group and fitness level.";

        results.innerHTML = "";

        return;
    }


    status.innerHTML =
        `${selectedLevel} ${selectedMuscle} Workout`;


    const selectedExercises =
        exercises[selectedMuscle][selectedLevel];


    results.innerHTML = "";


    selectedExercises.forEach(exercise => {

        const card = document.createElement("div");

        card.className = "exercise-card";

        card.innerHTML = `
            <h3>${exercise[0]}</h3>

            <p>
                ${exercise[1]}
            </p>

            <span>${selectedLevel}</span>
        `;

        results.appendChild(card);

    });

}
```
