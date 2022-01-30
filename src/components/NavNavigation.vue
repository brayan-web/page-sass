<template>
    <div>
        <nav>
            <ul class="navigation">
                <li><a href="#">About us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="buttons">
                <a class="btn__main" href="#">Sign Up</a>
                <a class="btn__hot" href="#">Get a quote</a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"NavNavegation"
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
// $--primary-color: #f9ed69;
// $--secondary-color: #f08a5d;
// $--color-teartiary: #b83b5e;
// $--color-text-dark: #333;
$--width-button:150px;
$--color-text-light: #eee;
@mixin clearfix{
   &::after{
        content: "";
        clear: both;
        display: table;
    }
}
@mixin style-link-text ($color){
    text-transform: uppercase;
    text-decoration: none;
    color: $color;

}
nav{
    margin: 30px;
    background-color: $--primary-color;
    @include clearfix;
}

.navigation{
    list-style: none;
    float: left;
    li{
        display: inline-block;
        margin-left: 30px;
        &:first-child{
            margin: 0;
        }
    }
    a:link{
    @include style-link-text($--color-text-dark);
       
    }
}
.buttons{
    float: right;
}
.btn__main:link,
.btn__hot:link{
    padding: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 100px;
    width: $--width-button;
    @include style-link-text($--color-text-light);
}
.btn__main{
    &:link{
        background-color: $--secondary-color;
    }
    &:hover{
        background-color: darken($--secondary-color, 15%);
    }
}
.btn__hot{
    &:link{
        background-color: $--secondary-color;
    }
    &:hover{
        background-color: darken($--secondary-color, 15%);
    }
}
</style>