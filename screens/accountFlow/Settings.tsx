import React from 'react'
import { Text, View, Box, Button, Flex, VStack } from 'native-base'
import TitleCardPlus from '../../components/TitleCardPlus'

function Settings() {
  return (
    <View m="6">
<VStack space={4}>
<Text size="xl" mb="2" fontWeight="extrabold">Settings</Text>
<TitleCardPlus title="Push notifications" />
<TitleCardPlus title="Preferences" />
<TitleCardPlus title="Language" />
<TitleCardPlus title="Legal" />
<TitleCardPlus title="Sign out" />
</VStack>
    </View>
  )
}

export default Settings