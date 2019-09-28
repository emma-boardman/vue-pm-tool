<template>
       <div class="auth">
		<router-link to="/pm">
        <auth-button type="button">PM</auth-button>
        </router-link>
		<router-link to="/client" exact>
        <auth-button type="button">Client</auth-button>
        </router-link>
        </div>
</template>


<script>
import Button from '../components/UI/Button/Button'

export default {
    components: {
        AuthButton: Button
    }
}
</script>

<style scoped>
.auth {
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.auth button {
    width: 50vw;
}
</style>
