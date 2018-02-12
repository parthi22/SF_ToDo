<!--
 ToDoApp.app
 -->

<aura:application description="ToDoApp" extends="force:slds" access="global" extensible="true">
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:handler event="c:todoAction" action="{!c.handleAction}"/>

    <aura:attribute type="Object" name="state"/>
	<div class="slds-page-header">
        <div class="slds-media">
            <div class="slds-media__body">
            	<h1 class="slds-page-header__title slds-truncate slds-align-middle slds-text-align_center" title="ToDo">ToDo App</h1>
            </div>
        </div>
    </div>
    <c:ToDoList state="{!v.state}" />
</aura:application>