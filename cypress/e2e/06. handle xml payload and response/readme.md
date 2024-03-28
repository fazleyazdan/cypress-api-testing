#### When Sending XML Payload. it is better to store it in variable and convert it to single line.

#### if you send Payload like this below, compiler will give you error.

``` XML
<?xml version="1.0" encoding="UTF-8"?>
<Pet>
	<id>0</id>
	<Category>
		<id>1</id>
		<name>string</name>
	</Category>
	<name>doggie</name>

	<photoUrls>
		<photoUrl>string</photoUrl>
	</photoUrls>
	<tags>
		<Tag>
			<id>1</id>
			<name>string</name>
		</Tag>
	</tags>
	<status>available</status>
</Pet>
```

#### Therefore convert it to single line. using online tools like " one compiler multiline to single line"

<?xml version="1.0" encoding="UTF-8"?> <Pet> 	<id>0</id> 	<Category> 		<id>1</id> 		<name>string</name> 	</Category> 	<name>doggie</name>  	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>1</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>

